import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { datas } from '../firebase';
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { Form,Modal,Button } from 'react-bootstrap';


function Home() {
  const [allDocs, setAllDocs] = useState([]);
  const [docTitle, setDocTitle] = useState('');
  const [reload, setReaload] = useState('');
  const [show, setShow] = useState(false);

  const docsCollectionRef = collection(datas, 'documents');

  const getAllDocs = async () => {
    const docsData = await getDocs(docsCollectionRef);
    const data = docsData.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }));
    setAllDocs(data);
  };

  const postData = async () => {
    await addDoc(docsCollectionRef, {
      title: docTitle,
      discription: ''
    });
    setReaload(docTitle);
  };

  const deleleDocs = async id => {
    const oneDoc = doc(datas, 'documents', id);
    await deleteDoc(oneDoc);
    setReaload(id);
    alert('deleted successfully')
  };

  useEffect(() => {
    getAllDocs();
  }, [reload]);

  const handleClose = () => setShow(false);

  const handleAdd = () => {
    postData();
    alert('created successfully')
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const handleEdit = data => {
    navigate('/view', { state: data });
  };

  const handleChange = e => {
    setDocTitle(e.target.value);
  };

  return (
    <div >
      <div className='container'>
        <div  className='d-flex  justify-content-center align-items-center flex-column mt-5'>
          <h1  className='text-center fw-bolder mt-2'>DOCUMENT APP</h1>
          <button onClick={handleShow} className="btn btn-primary mt-3">Add Document</button>
        </div>
        <div className='row mt-5'>
          {allDocs?.length > 0 ? (
            allDocs.map(item => (
              <div key={item.id} className='col-lg-4 mb-4'>
                <div  className='border rounded p-3'>
                  <div className='d-flex justify-content-between '>
                    <h3 className='mb-2 text-warning ms-3'>{item.title}</h3>
                    <div className='d-flex justify-content-center align-items-center'>
                      
                        <i onClick={() => handleEdit(item)} className="fa-regular fa-pen-to-square me-3 text-success"></i>
                        <i onClick={() => deleleDocs(item.id)} className="fa-solid fa-trash me-1 text-danger"></i>
                    </div>
                  </div>
                  <p style={{ textAlign: 'justify' }} className='px-3'>
                    {item.discription.replace(/<[^>]+>/g, '')}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
        <Modal size='sm' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control onChange={e=>handleChange(e)} type="text" placeholder="Add Title"  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      
      </div>
    </div>
  );
}

export default Home;