import React, { useState, useEffect, Component } from 'react';
import { Input, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { setImg, addPost } from '../actions/post-actions';
import './Photo.css'
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            loading: false,
            change: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const {img} = this.props
        console.log('img when mount : ' + img)
        if(img){
            console.log('img : ' + img)
            this.setState({
                image: img,
                change: true
            })
        }
    }

    componentWillUnmount() {
        const {img} = this.props
        console.log('img when unmount : ' + img)
        this.props.dispatch(setImg(this.state.image))
    }
    // const [image, setImage] = useState('')
    // const [loading, setLoading] = useState(false)
    // const [change, setChange] = useState(false)
    // const listTags = useSelector(state => state.listTags.item);
    // const img = useSelector(state => state.listTags.img);
    render(){
    const {listTags} = this.props
    let r;
    var name = ''

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'project')
        // setLoading(true)
        // setChange(true)
        this.setState({
            loading:true,
            change: true
        })
        const res = await fetch(
            'https://api.cloudinary.com/v1_1/ddexbpc6j/image/upload',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        // setImage(file.secure_url)
        // setLoading(false)
        this.setState({
            loading: false,
            image: file.secure_url
        })
    }


    if (this.state.change) {
        if (this.state.loading) {
            name = ''
            // console.log('here')
            r = <span> Loading </span>
        }
        else {
            name = '-change'
            r = <img src={this.state.image} style={{ width: '300px' }} />
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

    let children = (
        <ListGroupItem style={{display: 'none'}}>
            <div className="empty-text"></div>
        </ListGroupItem>
    );

    if(listTags.length) {
        children = listTags.map(tags => (
            <ListGroupItem style={{width: '25rem'}}>
                <img src={tags[0].photo} alt={tags[0].id} style={{width: '5px', height:'5px', paddingRight: '1rem'}}/>
                <span>{tags[0].name}</span>
            </ListGroupItem>
        ))
    }
    return (
        <div className="photo">
            <span className={`rec${name} align-items-center align-self-center`}>
                <span style={{ margin: 'auto' }}>
                    {r}
                </span>
            </span>
            <span className='search'>
                <Link to="/tags" style={{ textDecoration: 'none' }}>
                Add tags
                </Link>
                <div className='tags'>
                    <ListGroup>{children}</ListGroup>
                </div>
            </span>
            <Button onClick={this.handleClick}>Upload</Button>
        </div>
    )
    }

    handleClick(){
        const {listTags} = this.props
        this.props.dispatch(addPost(listTags, this.state.image))
    }

}

export default connect(state => ({
    listTags: state.listTags.item,
    img: state.listTags.img
}))(Photo);
