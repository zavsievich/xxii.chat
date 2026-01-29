class Message {
    constructor(message) {
        this.message = message;
    }

    render() {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `
            <div class="message-header">
                <div class="message-header-author">
                    <img src="${this.message.author.avatar}" alt="${this.message.author.name}" class="message-header-avatar">
                    ${this.message.author.name}
                </div>
            </div>
            <div class="message-content">
                ${this.message.content}
            </div>
            <div class="message-footer">
                <div class="message-footer-reactions">
                    ${this.message.reactions.map(reaction => `
                        <div class="message-footer-reaction">
                            ${reaction}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        return messageElement;
    }
}

export { Message };