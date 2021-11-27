import React from 'react';
import './ChatDisplay.css';
import Mess from './Mess';
import axios from 'axios';

class ChatDisplay extends React.Component {
	constructor(props){
		super(props);
		
		const chats = [{
				username: 'Dream Bot',
				content: <div>
					<div>Hi, this is Chat support,<br />how can I help you?</div>
				</div>
			}]
		this.state = {
			messages:chats,
            open:false
		};

		this.message = React.createRef();
		this.submitMessage = this.submitMessage.bind(this);
        this.toggleChat=this.toggleChat.bind(this);
		//window.submitMessageEx = this.submitMessageEx.bind(this);
		//this.submitMessageEx = this.submitMessageEx.bind(this);
		//this.submitHelp = this.submitHelp.bind(this);
		this.scrollToBottom = this.scrollToBottom.bind(this);

	}

    toggleChat(){
        this.setState({
            open:!this.state.open
        })
    }

	scrollToBottom() {
		let list = document.querySelector('.chats-container');
		list.scrollTop = 1000000;
	}

	/*submitMessageEx(str){
		this.setState({
			messages: this.state.messages.concat([{
				username: 'Student',
				content: <p>{str}</p>
			}])
		}, () => {
			this.scrollToBottom()
			axios.get(`/api/ask/${str}`).then((res) => {
				const {data} = res;
				if (data.length > 0) {
					this.setState({
						messages: this.state.messages.concat([{
							username: 'Dana, BC Bot',
							content: <p dangerouslySetInnerHTML={{__html: data[0].text}}></p>
						}])
					});
				} else {
					this.setState({
						messages: this.state.messages.concat([{
							username: 'Dana, BC Bot',
							content: <p>Sorry I don't understand</p>
						}])
					});
				}
				this.scrollToBottom()
			})
		});
	}
	submitHelp() {
		this.submitMessageEx('help');
	}*/
	submitMessage(){
		let input = this.message.current.getInputEl()
		if (!input.value) {
			return;
		}
        let sendT= {message:input.value}
		this.setState({
			messages: this.state.messages.concat([{
				username: 'Student',
				content: <p>{input.value}</p>
			}])
		}, () => {
			this.scrollToBottom()
			axios.post(`http://127.0.0.1:5000/predict`,sendT)
            
            .then((res) => {
                console.log(res);
				const answer = res.data.answer;
				if (answer.length > 0) {
					this.setState({
						messages: this.state.messages.concat([{
							username: 'Dream Bot',
							content: <p dangerouslySetInnerHTML={{__html: answer}}></p>
						}])
					});
				} else {
					this.setState({
						messages: this.state.messages.concat([{
							username: 'Dream Bot',
							content: <p>Sorry I don't understand</p>
						}])
					});
				}
				this.scrollToBottom()
				input.value = '';
				input.focus();
			})
		});
	}


	render(){
		return(
			<div> <div className='chatbox__button'> <button onClick={this.toggleChat}> <img src='/assets/images/chatbox-icon.svg'/></button></div>
             { this.state.open?
				<div className="college-theme">
                
					<h1>Chat Room</h1>
					
					<Mess ref={this.message}
						onSubmit={this.submitMessage} messages={this.state.messages}/>
				</div>:null}
			</div>
		);
	}
};

export default ChatDisplay;