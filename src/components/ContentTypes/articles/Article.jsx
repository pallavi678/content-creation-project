import React, { useState } from 'react';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

const ArticleCard = ({ title, description, image, dateTime }) => {
  let formattedTime = 'Unknown time';
  try {
    formattedTime = formatDistanceToNowStrict(parseISO(dateTime)) + ' ago';
  } catch (error) {
    console.error('Invalid date format:', dateTime);
  }

  return (
    <div className="card shadow-sm h-100">
      <img className="card-img-top" src={image} alt={title} style={{ height: '180px', objectFit: 'cover' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text ">{description}</p>
        <p className="card-text"><small>{formattedTime}</small></p>
      </div>
    </div>
  );
};

const Article = () => {
  const [showModal, setShowModal] = useState(false);
  const [articles, setArticles] = useState([
    { id: 1, title: "Understanding AI in Education", category: "EDUCATION", description: "Exploring the role of AI in modern education.", image: "https://alcorfund.com/wp-content/uploads/2020/09/Technical-Innovation.png", likes: 120 },
    { id: 2, title: "Latest Tech Innovations", category: "NEWS", description: "Recent advancements in technology that are shaping the future.", image: "https://alcorfund.com/wp-content/uploads/2020/09/Technical-Innovation.png", likes: 95 },
    { id: 3, title: "The Future of Online Learning", category: "EDUCATION", description: "How e-learning is evolving to meet modern needs.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNQQxBi2N-PQLOUdMUyy6NccgNvlf0Q_Qjw&s", likes: 110 },
    { id: 4, title: "Breaking Health Discoveries", category: "HEALTH", description: "Recent medical breakthroughs and research findings.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyFsDJy_UHalye8655WdCkKVTMx75ermvcoQ&s", likes: 80 },
    { id: 5, title: "Blockchain & Cryptocurrency", category: "NEWS", description: "An overview of blockchain and digital currencies.", image: "https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_676338290_306191.jpg", likes: 105 },
    { id: 6, title: "Mental Health Awareness", category: "HEALTH", description: "Understanding mental health and its importance.", image: "https://media.istockphoto.com/id/1363774646/vector/mental-health.jpg?s=612x612&w=0&k=20&c=tez61I2L6Dp9WGPS2qLHJ9G-9sDRM8Uw3mJJEj1NqFE=", likes: 130 },
    { id: 7, title: "Space Exploration Updates", category: "NEWS", description: "Latest discoveries in space exploration.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1ej0MCn-X0K83xV6sJzezJkf89e-5UqR4Q&s", likes: 85 },
    { id: 8, title: "Best Sci-Fi Movies", category: "ENTERTAINMENT", description: "Top science fiction movies of all time.", image: "https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_640.jpg", likes: 75 },
    { id: 9, title: "Benefits of Yoga", category: "HEALTH", description: "Health benefits of practicing yoga.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt27uSoFwVhRih9YDGDLx1AxYsAmQs_gSxGg&s", likes: 115 },
    { id: 10, title: "History of Artificial Intelligence", category: "EDUCATION", description: "A look into the history and evolution of AI.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2z8YPsk5HbJBoMf4br3rokBP42BHg6AlKA&s", likes: 125 },
    { id: 11, title: "Advancements in Medical Tech", category: "HEALTH", description: "Latest technology in the medical field.", image: "https://media.istockphoto.com/id/1364324877/photo/medicine-doctor-analysis-and-diagnosis-checking-health-of-patient-online-and-testing-result.jpg?s=612x612&w=0&k=20&c=V6g0oKASvW0o2leSa5mm4_6-S0_LIsH8OsS4KIC70mw=", likes: 140 },
    { id: 12, title: "Top 10 Comedy Shows", category: "ENTERTAINMENT", description: "Best comedy shows to watch.", image: "https://img.freepik.com/premium-vector/comedy-pop-art-style-editable-text-effect_102395-197.jpg?semt=ais_hybrid", likes: 90 },
    { id: 13, title: "Cybersecurity Trends", category: "NEWS", description: "New trends in cybersecurity.", image: "https://media.istockphoto.com/id/1484313578/photo/cyber-security-network-data-protection-privacy-concept.jpg?s=612x612&w=0&k=20&c=mBkwneErmbHd7s8xauDNU-uXitNSXXBtxJ7C9He0Y9s=", likes: 98 },
    { id: 14, title: "Best Online Courses", category: "EDUCATION", description: "Top online courses for skill development.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT99OI8jdsBpaR5mVjx_L4l956MLchHcp0w-g&s", likes: 108 },
    { id: 15, title: "Fitness & Nutrition Tips", category: "HEALTH", description: "Essential tips for a healthy lifestyle.", image: "https://media.istockphoto.com/id/1395337483/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=lev6DFIvb5CVjdxSxuURswdZYLNHZPT4Y44iUkgm2q4=", likes: 112 },
    { id: 16, title: "Virtual Reality in Gaming", category: "ENTERTAINMENT", description: "The impact of VR on gaming.", image: "https://media.istockphoto.com/id/1324380506/photo/people-with-vr-grasses-playing-virtual-reality-game-future-digital-technology-and-3d-virtual.jpg?s=612x612&w=0&k=20&c=I_9fnEi1hNHFwy0qe8g7V1ZQJmgyKEDOSDJonScTSMU=", likes: 88 },
    { id: 17, title: "The Rise of Podcasts", category: "ENTERTAINMENT", description: "How podcasts are becoming mainstream.", image: "https://t4.ftcdn.net/jpg/02/75/00/01/360_F_275000195_rGRx3UMAvK2PQW8I4pSgHPZDXdK9MsF4.jpg", likes: 92 },
    { id: 18, title: "Impact of Climate Change", category: "NEWS", description: "Effects of climate change worldwide.", image: "https://st.depositphotos.com/1288351/3082/i/450/depositphotos_30828375-stock-photo-global-warming.jpg", likes: 102 },
    { id: 19, title: "Augmented Reality in Education", category: "EDUCATION", description: "How AR is transforming learning.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yYOl6L5QvvL5wZPtUMNb_nleamR9NRquqQ&s", likes: 118 },
    { id: 20, title: "Healthy Eating Habits", category: "HEALTH", description: "How to maintain a healthy diet.", image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=", likes: 122 }
  
  ]);

  const [newArticle, setNewArticle] = useState({ title: '', description: '', image: '', dateTime: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleAddArticle = () => {

    // if (!newArticle.title.trim() || !newArticle.description.trim() || (!selectedFile && !newArticle.image)) {
    //   alert('Please fill in all fields before submitting.');
    //   return;
    // }

    const newArticleWithTime = {
      ...newArticle,
      dateTime: new Date().toISOString(),
      image: selectedFile ? URL.createObjectURL(selectedFile) : newArticle.image,
    };

    setArticles([...articles, newArticleWithTime]);
    setNewArticle({ title: '', description: '', image: '', dateTime: '' });
    setSelectedFile(null);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div style={{overflow:"hidden"}}>
      <div className="py-3 bg-light shadow-sm sticky-top container-fluid" style={{ top:"-20px" }}>
        <div className="row align-items-center">
          <div className="col-md-9 text-center text-md-start">
            <h1 className="text-center">ARTICLES PAGE</h1>
          </div>
          <div className="col-md-3 text-center text-md-end mt-2 mt-md-0">
            <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Article</button>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row g-4">
          {articles.map((article, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4">
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Article</h5>
                {/* <button type="button" className="close" onClick={() => setShowModal(false)}>&times;</button> */}
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" placeholder="Enter title" name="title" value={newArticle.title} onChange={handleInputChange} />
                  </div>
                  <div className="form-group mt-2">
                    <label>Description</label>
                    <textarea className="form-control" rows="3" placeholder="Enter description" name="description" value={newArticle.description} onChange={handleInputChange}></textarea>
                  </div>
                  <div className="form-group mt-2">
                    <label>Upload Image</label>
                    <input type="file" className="form-control" accept="image/*" onChange={handleFileChange} />
                    {selectedFile && (
                      <div className="mt-2">
                        <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="img-fluid rounded" style={{ height: '100px', objectFit: 'cover' }} />
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                <button className="btn btn-primary" onClick={handleAddArticle}>Submit</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Article;
