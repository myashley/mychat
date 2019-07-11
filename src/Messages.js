import React, {component} from "react"

class Messages extends Component {
    render() {
        const {messages} = this.props
        return (
            <ul className="Messages-list">
                {messages.map(message => this.renderMessage(message))}
            </ul>
        )
    }
}

export default Messages