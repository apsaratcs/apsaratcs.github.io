class Apsara {
    /**
     * Fetches JSON data from the specified path and processes it to add content to the target element.
     * @param {string} jsonPath - The path to the JSON file.
     * @param {HTMLElement} targetElement - The target element to append the content to.
     * @returns {Promise} - A promise that resolves when data is fetched and processed successfully.
     */
    static fetchDataAndProcess(jsonPath = "src/js/data.json", targetElement = document.body) {
        return fetch(jsonPath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch JSON from ${jsonPath}`);
                }
                return response.json();
            })
            .then(data => {
                this.processAndAppendData(data, targetElement);
            })
            .catch(error => {
                console.error("Error while fetching or processing data:", error);
                throw error; // Re-throw the error to propagate it further
            });
    }

    /**
     * Processes JSON data and appends content to the specified target element.
     * @param {Object} data - The JSON data to process.
     * @param {HTMLElement} targetElement - The target element to append the content to.
     */
    static processAndAppendData(data, targetElement) {
        // Ensure targetElement is a valid HTMLElement
        if (!(targetElement instanceof HTMLElement)) {
            throw new TypeError("Target element is not a valid HTMLElement.");
        }

        Object.keys(data).forEach(key => {
            const item = data[key];
            let element;

            switch (item.type) {
                case "text":
                    element = this.createTextElement(item.data);
                    break;
                case "image":
                    element = this.createImageElement(item.data);
                    break;
                case "video":
                    element = this.createVideoElement(item.data);
                    break;
                case "element":
                    element = this.createDivElement();
                    this.processAndAppendData(item.data, element); // Recursively process sub-elements
                    break;
                default:
                    console.warn(`Unknown type: ${item.type}`);
                    break;
            }

            if (element) {
                targetElement.appendChild(element);
            }
        });
    }

    /**
     * Creates a paragraph element with the specified text content.
     * @param {string} text - The text content for the paragraph.
     * @returns {HTMLElement} - The created paragraph element.
     */
    static createTextElement(text) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        return paragraph;
    }

    /**
     * Creates an image element with the specified source.
     * @param {string} src - The source URL for the image.
     * @returns {HTMLImageElement} - The created image element.
     */
    static createImageElement(src) {
        const image = document.createElement("img");
        image.src = src;
        return image;
    }

    /**
     * Creates a video element with the specified source and adds controls.
     * @param {string} src - The source URL for the video.
     * @returns {HTMLVideoElement} - The created video element.
     */
    static createVideoElement(src) {
        const video = document.createElement("video");
        video.src = src;
        video.controls = true;
        return video;
    }

    /**
     * Creates a div element.
     * @returns {HTMLDivElement} - The created div element.
     */
    static createDivElement() {
        return document.createElement("div");
    }
}

export { Apsara };
