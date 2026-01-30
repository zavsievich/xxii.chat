class MessageBase {
    constructor(message) {
        this.message = message;
    }

    renderHeader() {
        const headerElement = document.createElement('header');
        headerElement.classList.add("message-header");
        headerElement.innerHTML = `
                <div class="message-header-author">
                    <img src="${this.message.author.avatar}" alt="${this.message.author.name}" class="message-header-avatar">
                    ${this.message.author.name}
                </div>
                <div class="message-header-time">
                    ${Intl.DateTimeFormat("en-GB", {
            timeStyle: "short",
            dateStyle: "short",
        }).format(this.message.created)}
                </div>
        `;
        return headerElement;
    };

    renderMessage() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("message-content");
        wrapper.innerHTML = `${this.message.content}`;
        return wrapper;
    }

    renderFooter() {
        const footerElement = document.createElement("footer");
        footerElement.classList.add("message-footer")
        footerElement.innerHTML = `
                <div class="message-footer-reactions">
                    ${this.message.reactions.map(reaction => `
                        <div class="message-footer-reaction">
                            ${reaction}
                        </div>
                    `).join('')}
                </div>
        `;
        return footerElement;
    }

    render() {
        const messageContainer = document.createElement("article");
        messageContainer.classList.add("message");
        const header = this.renderHeader();
        const message = this.renderMessage();
        const footer = this.renderFooter();
        messageContainer.appendChild(header);
        messageContainer.appendChild(message);
        messageContainer.appendChild(footer);
        return messageContainer;
    }
}

class MessageComposer extends MessageBase {
    constructor(message) {
        super(message);
    }

    renderMessage() {
        const wrapper = document.createElement("div");
        wrapper.classList.add("message-content");
        wrapper.innerHTML = `${this.message.content}`;
        return wrapper;
    }
}

class MessageTimeline extends MessageBase {
    constructor(message) {
        super(message);
    }
}

export { MessageTimeline, MessageComposer };