


//Personality slide in
document.addEventListener('DOMContentLoaded', function() {
    const targets = document.querySelectorAll('.section__title, .grid__text, .video-slide-in');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });

    targets.forEach(target => observer.observe(target));
});

// Function to handle sidebar item clicks and reveal the corresponding goal content
// Function to handle sidebar item clicks and reveal the corresponding goal content
function showContent(goalId) {
    // Get all content items
    const contentItems = document.querySelectorAll('.content__item');

    // Hide all content items
    contentItems.forEach(item => {
        item.style.display = 'none';
    });

    // Show the selected content item
    const selectedContent = document.getElementById(goalId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

// Function to handle sidebar item clicks and reveal the corresponding goal content with a fade-in effect
function showContent(goalId) {
    // Get all content items
    const contentItems = document.querySelectorAll('.content__item');

    // Hide all content items and remove the fade-in class
    contentItems.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('fade-in'); // Remove the fade-in class if it was previously applied
    });

    // Show the selected content item
    const selectedContent = document.getElementById(goalId);
    if (selectedContent) {
        selectedContent.style.display = 'block';

        // Trigger the fade-in effect after the element is made visible
        setTimeout(() => {
            selectedContent.classList.add('fade-in');
        }, 0); // Ensure the element is visible before applying the class
    }
}


//header slideup
document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.querySelector('.header-container');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                headerContainer.classList.add('visible');
            }
        });
    });

    observer.observe(headerContainer);
});

// click questions & notes section

document.addEventListener('DOMContentLoaded', function() {
    // Select all accordion headers
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Add click event listener to each header
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Get the corresponding accordion content
            const accordionContent = this.nextElementSibling;

            // Check if the content is currently displayed (open)
            if (accordionContent.style.maxHeight && accordionContent.style.maxHeight !== '0px') {
                // Close the content
                accordionContent.style.maxHeight = '0px';
                setTimeout(() => {
                    accordionContent.style.display = 'none';
                }, 300); // Wait for the transition to complete before setting display to none
            } else {
                // Ensure all other contents are closed before opening the current one
                document.querySelectorAll('.accordion-content').forEach(content => {
                    if (content !== accordionContent) {
                        content.style.maxHeight = '0px';
                        setTimeout(() => {
                            content.style.display = 'none';
                        }, 300); // Close any open accordion content
                    }
                });

                // Open the clicked content
                accordionContent.style.display = 'block';
                // Ensure that the max-height is calculated after display is set to block
                setTimeout(() => {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
                }, 10); // Allow a small delay for the display change to apply before setting max-height
            }
        });
    });
});

//Toggle Active Class Accordion
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.section__subtitle');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle active class on the header
            this.classList.toggle('active');

            // Get the associated content
            const content = this.nextElementSibling;

            if (content.classList.contains('open')) {
                content.classList.remove('open');
                content.style.maxHeight = null;
            } else {
                // Close other open contents (if any)
                document.querySelectorAll('.accordion-content.open').forEach(openContent => {
                    openContent.classList.remove('open');
                    openContent.style.maxHeight = null;
                });

                // Open the clicked content
                content.classList.add('open');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});

//fade in accordion
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('open');
    });
});
