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
        if (this.message.edited) {
            const editedElement = document.createElement("span");
            editedElement.classList.add("message-header-edited");
            editedElement.innerText = " (edited)";
            headerElement.querySelector(".message-header-time").appendChild(editedElement);
        }

        if (this.message.pinned) {
            const pinnedElement = document.createElement("span");
            pinnedElement.classList.add("message-header-pinned");
            pinnedElement.innerText = " (pinned)";
            headerElement.appendChild(pinnedElement);
        }
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
        footerElement.classList.add("message-footer");
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
    };

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
    };
}

class MessageTimeline extends MessageBase {
    constructor(message) {
        super(message);
    }
}

class MessageComposer extends MessageBase {
    constructor(message) {
        super(message);

    }

    setEvents({ input, sendButton }) {
        input.addEventListener("keydown", (event) => {
            if (event.key !== 'Enter') return;
            if (event.shiftKey) {
                return;
            }
            event.preventDefault();


            // TODO: high coupling
            this.sendMessage();
            this.clearMessageField(input);
        })

        sendButton.addEventListener("click", (event) => {
            event.preventDefault();

            // TODO: high coupling
            this.sendMessage();
            this.clearMessageField(input);
        })
    }

    async sendMessage() {
        console.log("send");
    }

    clearMessageField(messageField) {
        messageField.innerHTML = '';
    }

    renderMessage() {
        const wrapper = document.createElement("form");
        wrapper.classList.add("message-content");
        const textarea = document.createElement("div");
        textarea.classList.add("message-input");
        textarea.value = this.message.content;
        textarea.contentEditable = true;
        const sendButton = document.createElement("button");
        sendButton.classList.add("message-send");
        sendButton.innerText = "Send";
        wrapper.appendChild(textarea);
        wrapper.appendChild(sendButton);

        // TODO: high coupling
        this.setEvents({ input: textarea, sendButton });

        return wrapper;
    }
}

class Message {
    static create(message) {
        switch (message.status) {
            case "pending":
                return new MessageComposer(message);

            default:
            case "confirmed":
                return new MessageTimeline(message);
        }
    }
}

export { Message };