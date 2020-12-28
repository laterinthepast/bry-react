import React from 'react'
import './Gallery.css'
import { SRLWrapper } from 'simple-react-lightbox';
import Photo from './Photo'

function Gallery(){
    return(
    
    <SRLWrapper>
    <div class="gallery_">
        <Photo
            src="/images/img-1.png"
        />
        <Photo
            src="/images/img-2.png"
        />
        <Photo
            src="/images/img-3.png"
        />
        <Photo
            src="/images/img-4.png"
        />
        <Photo
            src="/images/img-5.png"
        />
        <Photo
            src="/images/img-6.png"
        />
        <Photo
            src="/images/img-7.png"
        />
        <Photo
            src="/images/img-8.png"
        />
        <Photo
            src="/images/img-9.png"
        />
        <Photo
            src="/images/img-10.png"
        />
        <Photo
            src="/images/img-11.png"
        />
        <Photo
            src="/images/img-12.png"
        />
        <Photo
            src="/images/img-1.png"
        />
        <Photo
            src="/images/img-2.png"
        />
        <Photo
            src="/images/img-2.png"
        />
        
        
    </div>
    </SRLWrapper>
    
        
        )
}

export default Gallery;