import React, { useState } from 'react';
import { Input } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

    if (change) {
        if (loading) {
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
            <span className={`rec${name} align-items-center align-self-center`}>
                <span style={{ margin: 'auto' }}>
                    {r}
                </span>
            </span>
            <span className='search'>
                <Link to="/product_query" style={{ textDecoration: 'none' }}>
                Add tags
                </Link>
            </span>
        </div>
    )

}

export default Photo;
