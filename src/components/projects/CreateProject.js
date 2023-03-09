import React, { useState, useEffect } from "react";
import { createProject } from "../../store/actions/projectActions";
import { connect } from "react-redux";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../../config/firebase-config";
import { storage } from "../../config/firebase-config";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
const CreateProject = (props) => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);

  // Blog Ref in Firestore
  const BlogRef = collection(db, "Projects");

  // Image ref
  const imageListRef = ref(storage, "reviewImages/");

  // Call to firebase
  useEffect(() => {
    const getBlog = async () => {
      const data = await getDocs(BlogRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]);
        });
      });
    });
    getBlog();
  }, []);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `reviewImages/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Uploaded");
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    uploadImage();
    console.log(`Title: ${title} \nContent : ${content}`);
    await addDoc(BlogRef, { title: title, content: content });
  };

  // {imageList.map((url) => (
  //   <>
  //     <img src={url} alt="" />
  //   </>
  // ))}

  const imageReview = imageList.map((url) => <img src={url} alt="" />);
  return (
    <>
      <div className="sign_in">
        <form onSubmit={submitHandler}>
          <h5>Create Project</h5>
          <div className="input_field">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={titleHandler}
            />
          </div>
          <div className="input_field">
            <label htmlFor="content">Content</label>
            <textarea
              name=""
              id="content"
              value={content}
              cols="30"
              rows="10"
              onChange={contentHandler}
            ></textarea>
          </div>
          <div className="input_field">
            <input
              type="file"
              onChange={(e) => {
                setImageUpload(e.target.files[0]);
              }}
            />
          </div>
          <div className="input_field">
            <button>Create</button>
          </div>
        </form>
        <div>
          {users.map((user) => {
            return (
              <>
                <h3>Title : {user.title}</h3>
                <p>Content : {user.content}</p>
                <b>
                  Author: {user.authorFirstName} {user.authorLastName}
                </b>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(null, mapDispatchToProps)(CreateProject);
