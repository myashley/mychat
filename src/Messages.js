import React, {component} from "react"
import { memberExpression } from "@babel/types";

class Messages extends Component {

    renderMessage(message) {
        const {member, text} = message
        const {currrentMember} = this.props
        const messageFromMe = member.id === currrentMember.id
        const className = messageFromMe ? "Messages-message currentMember" : "Messages-message"

        return (
            <li className={className}>
                <span className="avatar" style={{backgroundColor: member.clientData.color}} />
                <div className="Message-content">
                    <div className="username">
                        {memberExpression.clientData.username}
                    </div>
                    <div className="text">{text}</div>
                </div>
            </li>
        )
    }


    render() {
        const {messages} = this.props
        return (
            <ul className="Messages-list">
                {messages.map(m => this.renderMessage(m))}
            </ul>
        )
    }
}

export default Messages