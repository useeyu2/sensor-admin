import React, { useState } from 'react';
import { Upload, Video, Image as ImageIcon, FileText, FolderPlus, MoreVertical, Trash2, Edit2 } from 'lucide-react';
import './ContentManagement.css';

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isTopicModalOpen, setIsTopicModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [topics, setTopics] = useState(['Math 101', 'Physics', 'Biology', 'History']);
  const [contentItems, setContentItems] = useState([
    { id: 1, type: 'video', title: 'Introduction to Algebra', topic: 'Math 101', date: 'Oct 24, 2023', size: '145 MB', thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=500&q=80' },
    { id: 2, type: 'document', title: 'Physics Formula Sheet', topic: 'Physics', date: 'Oct 22, 2023', size: '2.4 MB', thumbnail: null },
    { id: 3, type: 'image', title: 'Biology Cell Diagram', topic: 'Biology', date: 'Oct 20, 2023', size: '5.1 MB', thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&q=80' },
    { id: 4, type: 'video', title: 'History of Ancient Rome', topic: 'History', date: 'Oct 18, 2023', size: '210 MB', thumbnail: 'https://images.unsplash.com/photo-1461360370896-922624d12aa1?w=500&q=80' },
  ]);

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const file = formData.get('file');
    
    // Create a local preview URL if an image or video is selected
    const thumbnail = file && file.size > 0 && (file.type.startsWith('image/') || file.type.startsWith('video/'))
      ? URL.createObjectURL(file)
      : null;

    const newContent = {
      id: Date.now(),
      type: formData.get('type'),
      title: formData.get('title'),
      topic: formData.get('topic'),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      size: file && file.size > 0 ? (file.size / (1024 * 1024)).toFixed(1) + ' MB' : 'Unknown',
      thumbnail: thumbnail,
    };
    setContentItems([newContent, ...contentItems]);
    setIsUploadModalOpen(false);
  };

  const handleTopicSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newTopic = formData.get('topicName');
    if (newTopic && !topics.includes(newTopic)) {
      setTopics([...topics, newTopic]);
    }
    setIsTopicModalOpen(false);
  };

  const renderIcon = (type) => {
    switch(type) {
      case 'video': return <Video size={24} className="content-icon video" />;
      case 'image': return <ImageIcon size={24} className="content-icon image" />;
      case 'document': return <FileText size={24} className="content-icon doc" />;
      default: return <FileText size={24} className="content-icon" />;
    }
  };

  return (
    <div className="content-management animate-fade-in">
      <div className="page-header">
        <div>
          <h1>Content Management</h1>
          <p>Upload and organize your academy's learning materials.</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary" onClick={() => setIsTopicModalOpen(true)}>
            <FolderPlus size={18} /> New Topic
          </button>
          <button className="btn-primary" onClick={() => setIsUploadModalOpen(true)}>
            <Upload size={18} /> Upload Content
          </button>
        </div>
      </div>

      <div className="content-filters">
        <button className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`} onClick={() => setActiveTab('all')}>All Content</button>
        <button className={`filter-tab ${activeTab === 'video' ? 'active' : ''}`} onClick={() => setActiveTab('video')}>Videos</button>
        <button className={`filter-tab ${activeTab === 'image' ? 'active' : ''}`} onClick={() => setActiveTab('image')}>Images</button>
        <button className={`filter-tab ${activeTab === 'document' ? 'active' : ''}`} onClick={() => setActiveTab('document')}>Documents</button>
      </div>

      <div className="content-grid">
        {contentItems.filter(item => activeTab === 'all' || item.type === activeTab).map((item) => (
          <div key={item.id} className="content-card">
            <div className="card-media">
              {item.thumbnail ? (
                item.type === 'video' ? (
                  <video src={item.thumbnail} className="content-thumbnail" muted />
                ) : (
                  <img src={item.thumbnail} alt={item.title} className="content-thumbnail" />
                )
              ) : (
                <div className="content-thumbnail-placeholder">
                  {renderIcon(item.type)}
                </div>
              )}
              
              <button className="action-menu-btn"><MoreVertical size={18} /></button>
              
              <div className={`media-badge ${item.type}`}>
                {item.type === 'video' && <Video size={14}/>}
                {item.type === 'image' && <ImageIcon size={14}/>}
                {item.type === 'document' && <FileText size={14}/>}
              </div>
            </div>
            <div className="card-body">
              <h3 className="content-title">{item.title}</h3>
              <span className="content-topic">{item.topic}</span>
            </div>
            <div className="card-footer">
              <span className="content-meta">{item.date}</span>
              <span className="content-meta">{item.size}</span>
            </div>
            {/* Hover Actions */}
            <div className="card-hover-actions">
              <button className="hover-btn edit"><Edit2 size={16} /> Edit</button>
              <button className="hover-btn delete"><Trash2 size={16} /> Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {isTopicModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Create New Topic</h2>
            <form onSubmit={handleTopicSubmit}>
              <div className="form-group">
                <label>Topic Name</label>
                <input type="text" name="topicName" required placeholder="e.g. Advanced Chemistry" />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsTopicModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isUploadModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Upload Content</h2>
            <form onSubmit={handleUploadSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" required placeholder="Enter content title" />
              </div>
              <div className="form-group">
                <label>Content Type</label>
                <select name="type" required>
                  <option value="video">Video</option>
                  <option value="image">Image</option>
                  <option value="document">Document</option>
                </select>
              </div>
              <div className="form-group">
                <label>Topic</label>
                <select name="topic" required>
                  {topics.map(topic => (
                    <option key={topic} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>File</label>
                <input type="file" name="file" required accept="image/*,video/*,.pdf,.doc,.docx" />
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setIsUploadModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Upload</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManagement;
