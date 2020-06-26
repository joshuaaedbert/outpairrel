import React, { useState } from 'react';
import './Photo.css'

function Photo() {
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const [change, setChange] = useState(false)
    let r;
    var name = ''

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'project')
        setLoading(true)
        setChange(true)
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/ddexbpc6j/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
        setLoading(false)
        
    }

     if( change ){
        if(loading){
            name = ''
            // console.log('here')
            r = <span> Loading </span>
        }
        else {
            name = '-change'
            r = <img src={image} style={{ width: '300px' }} />
        }
     }
     else {
        name = '';
        r = <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
        />
     }
    return (
        <div className="photo">
            <div className= {`rec${name} align-items-center align-self-center`}>
                <div style={{margin: 'auto'}}>
                    {r}
                </div>  
            </div>
        </div>
    )

}

export default Photo;
