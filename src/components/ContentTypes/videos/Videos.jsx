import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatDistanceToNowStrict, parseISO } from 'date-fns';

function Videos() {
  const [videos, setVideos] = useState([
    {
      src: 'https://videos.pexels.com/video-files/8084496/8084496-sd_640_360_25fps.mp4',
      title: 'Artificial Intelligence',
      description: 'Artificial intelligence (AI) is a technology that allows computers to perform tasks that typically require human intelligence',
      dateTime: '2025-02-18T10:30',
    },
    {
      src: 'https://videos.pexels.com/video-files/7947406/7947406-sd_640_360_30fps.mp4',
      title: 'Machine Learning',
      description: 'Machine learning is a type of artificial intelligence that allows computers to learn from data and improve over time.',
      dateTime: '2025-02-17T12:45',
    },
    {
      src: 'https://videos.pexels.com/video-files/4974708/4974708-sd_640_360_25fps.mp4',
      title: 'Web Development',
      description: 'Web development is the process of building, maintaining, and improving websites and web applications',
      dateTime: '2025-02-16T14:00',
    },
  ]);

  const [newVideo, setNewVideo] = useState({
    src: '',
    title: '',
    description: '',
    dateTime: '',
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setNewVideo({ ...newVideo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideos([...videos, newVideo]);
    setNewVideo({ src: '', title: '', description: '', dateTime: '' });
    setShowModal(false);
  };

  return (
    <div className="container mt-5">
      <div
        style={{
          position: 'sticky',
          top: '-20px',
          backgroundColor: 'white',
          zIndex: 500,
          padding: '15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #ddd',
        }}
      >
        <h2 style={{ margin: 0 }}>Videos</h2>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add Video+
        </button>
      </div>

      <div className="row mt-3">
        {videos.map((video, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <video className="card-img-top" controls>
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="card-body">
                <h5 className="card-title fs-3">{video.title}</h5>
                <p className="card-text">{video.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {formatDistanceToNowStrict(parseISO(video.dateTime))} ago
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for adding video */}
      {showModal && (
        <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Video</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="videoSrc" className="form-label">Video URL</label>
                    <input
                      type="url"
                      className="form-control"
                      id="videoSrc"
                      name="src"
                      value={newVideo.src}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={newVideo.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={newVideo.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dateTime" className="form-label">Date and Time</label>
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="dateTime"
                      name="dateTime"
                      value={newVideo.dateTime}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos;