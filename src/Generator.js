import React from 'react'
import Form from './Form'

class Generator extends React.Component {

    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.generateMeme = this.generateMeme.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
          .then(response => response.json())
        //   .then(data => {
        //     this.setState({allMemeImgs: data})
        //   })
            .then(response => {
                const {memes} = response.data
                this.setState({allMemeImgs: memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target //pulls the name and value properties of event.target
        this.setState({[name]: value})
    }

    generateMeme(e) {
        e.preventDefault();
        var imageNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        var pic = this.state.allMemeImgs[imageNum].url
        this.setState({randomImage: pic})
    }


    render() {
        return(
            <Form 
                handleChange = {this.handleChange}
                generateMeme = {this.generateMeme}
                data = {this.state}
            />
        )
    }

}

export default Generator;