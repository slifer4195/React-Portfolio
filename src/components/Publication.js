import React from 'react';
import './Publication.css'; 
import DownloadButton from './DownloadButton';

function Publication() {
  return (
    <>
     <h1 className='title'>Publication</h1>
     <div className="publication-wrapper">
        <div className="publication-container">
        <img 
            src="images/journal.png" 
            alt="Description of the image" 
            className="publication-image"
        />
        <div className="publication-description">
            <h1 className="publication-title">Journal Paper</h1>
            <p className="publication-subtitle"><strong>Paper Title :</strong> Frame Generative Neural Network for Denoising Severely Noisy Images</p>
            <p><strong>Author :</strong> Sung Rung Yoo</p>
            <p><strong>Article Citation :</strong> Sung Rung Yoo, (2021) " Frame Generative Neural Network for Denoising Severely Noisy Images ", <i>International Journal of Advance Computational Engineering and Networking (IJACEN)</i>, pp. 25-28, Volume-9, Issue-9</p>
            <p><strong>Abstract :</strong> The existing denoising technologies still have been challenging either under low PSNR environment or under multiple types of noises. The purpose of this paper is to introduce a new deep learning neural network model named Frame Generative Neural network (FGNN) for denoising extremely noisy images. The FGNN utilizes multiple neural networks connected in parallel to generate many frames. Although each net produces the image with less noise but surely not sufficient, when these frames are synchronously combined, it can produce a much better quality of image with plenty of detail. </p>
            <p><strong>Type :</strong> Research paper</p>
            <p><strong>Published :</strong> Volume-9, Issue-9</p>
            <p><strong>Copyright :</strong> © Institute of Research and Journals</p>
            <p><strong>Link to publication - </strong> <a href="https://iraj.in/journal/IJACEN//paper_detail.php?paper_id=18155&nameFrame_Generative_Neural_Network_for_Denoising_Severely_Noisy_Images">View Here</a></p>
            <br />
            <DownloadButton />
        </div>
        </div>
        </div>
    </>
  
  );
}

export default Publication;
