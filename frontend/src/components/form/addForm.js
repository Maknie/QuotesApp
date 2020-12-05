import React from 'react';
import styles from './addForm.module.css';
import axios from 'axios'

class AddForm extends React.Component {
  constructor(props) {
    super(props);

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

    this.state = {
        verified: false,
        author: '',
        genres: '',
        quote: '',
    }

}

changeHandler = (e) => {
  this.setState({ [e.target.name]: e.target.value })
  this.setState({ apartment: this.props.apartment_name })
}

submitHandler = (e) => {
  if (!this.state.author || !this.state.quote || !this.state.genres) {
      alert("Please fill all the fields")
  } else {
    e.preventDefault()
    axios.post('http://localhost:3012/quotes', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    this.setState({
        isVerified: false,
        author: '',
        genres: '',
        quote: '',
    });
    alert('Your message was successfully sent')
  }
}

  render(){
    const { author, genres, quote } = this.state

    return (
      <div id={styles.AddForm}>
          <form id={styles.form} onSubmit={this.submitHandler}>
              <input 
                className={styles.recipeText}
                type="text"
                name="author" 
                value={author}
                placeholder="Author" 
                onChange={this.changeHandler}/>
              <textarea 
                className={styles.recipeText} 
                rows="2"
                type="text" 
                name="genres" 
                value={genres}
                placeholder="Genres" 
                onChange={this.changeHandler}/>
              <textarea 
                className={styles.recipeText} 
                name="quote" 
                value={quote} 
                rows="5" 
                placeholder="Quote" 
                onChange={this.changeHandler}/>
              <input id={styles.submitBtn} type="submit" value="Send"/>
          </form>
      </div>
    );
  }
}

export default AddForm;
