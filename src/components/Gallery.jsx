import React from 'react'
import '../styles/Gallery.css'
import { SRLWrapper } from 'simple-react-lightbox';
import Photo from './Photo'

function Gallery() {
    return (

        <SRLWrapper>
            <div className="gallery_">
                <Photo
                    src="/images/1.jpg"
                />
                <Photo
                    src="/images/2.jpg"
                />
                <Photo
                    src="/images/3.jpg"
                />
                <Photo
                    src="/images/4.jpg"
                />
                <Photo
                    src="/images/5.jpg"
                />
                <Photo
                    src="/images/6.jpg"
                />
                <Photo
                    src="/images/7.jpg"
                />
                <Photo
                    src="/images/8.jpg"
                />
                <Photo
                    src="/images/9.jpg"
                />
                <Photo
                    src="/images/10.jpg"
                />
                <Photo
                    src="/images/11.jpg"
                />
                <Photo
                    src="/images/12.jpg"
                />
                <Photo
                    src="/images/13.jpg"
                />
                <Photo
                    src="/images/14.jpg"
                />
                <Photo
                    src="/images/15.jpg"
                />
            </div>
        </SRLWrapper>


    )
}

export default Gallery;