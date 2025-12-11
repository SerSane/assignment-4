# AI Usage Report - Portfolio Website Development

## Introduction

This document details how I used AI tools as a development assistant while building my portfolio website. Throughout the project, **I made all design decisions, wrote and customized all code, and evaluated every AI suggestion** before implementation. AI served as a learning tool and coding assistant, but all final implementations, architecture choices, and code modifications are my own work.

This report documents:
- AI tools I used for learning and assistance
- Specific prompts I gave to AI tools
- AI suggestions I received
- How I modified and customized AI suggestions
- What I learned from each interaction
- Benefits and challenges I encountered

**Important Note**: While AI provided helpful suggestions, I independently developed, tested, and refined all features. Every AI suggestion was evaluated, customized, and integrated according to my design vision and project requirements.

---

## AI Tools and Platforms Used

### 1. Cursor AI Assistant (Primary Tool)

I used Cursor AI Assistant as my primary development tool to help with:

**How I Used It:**
- **Learning Assistance**: Asked AI to explain concepts I was learning (async/await, fetch API, error handling)
- **Code Suggestions**: Requested code patterns which I then customized for my specific needs
- **Debugging Help**: Used AI to identify errors in code I wrote
- **Best Practices Guidance**: Asked for recommendations on code organization and optimization
- **Problem-Solving**: Consulted AI when stuck on specific implementation challenges

**Areas Where I Used AI Assistance:**
- **Dynamic Content Implementation**: I asked AI for pattern examples for time-based greeting logic, then I built my own implementation
- **Form Validation**: I requested validation pattern suggestions, which I then customized and extended with my own logic
- **LocalStorage Management**: AI provided basic patterns which I adapted for my specific use cases
- **Animation Systems**: I asked for CSS keyframe examples and JavaScript transition patterns, then implemented my own animations
- **GitHub API Integration**: I requested help understanding fetch API patterns, then wrote my own implementation with custom error handling
- **Performance Optimization**: AI suggested optimization strategies which I evaluated and implemented where appropriate

---

### Use Case 1: GitHub API Integration


#### My Request to AI:
```
You are helping me complete my web development assignment for my portfolio site. 
Please add GitHub API integration:
- Create a "Latest GitHub Projects" section
- Fetch repos from: https://api.github.com/users/SerSane/repos?sort=updated&per_page=6
- Show loading state while fetching
- Handle errors gracefully
- Display cards with name, description, language, and last updated date
- Use vanilla JavaScript only
```

#### AI Suggestions Received:
The AI provided boilerplate code of how API integrations are generally implemented


#### What I Actually Implemented:

After reviewing AI suggestions, I implemented my own version with these decisions:

1. **Custom Date Formatting Function**: I built my own date formatting function to show "Updated on DD MMM YYYY" format, as the AI's suggestion didn't match my design requirements
   ```javascript
   function formatDate(dateString) {
       const date = new Date(dateString);
       const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                       'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
       return `Updated on ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
   }
   ```

2. **Custom Error Messages**: I wrote user-friendly error messages tailored to my application's tone

3. **Architecture Decision**: I decided to place GitHub section within Projects section

4. **Theme Integration**: I rewrote the CSS to use my existing theme variables (--surface-color, --text-primary, etc.) instead of hardcoded colors

5. **Error Handling Enhancement**: I extended AI's basic error handling to include specific status code checks (403, 404) and response validation

6. **Response Validation**: I added array validation to ensure API responses are in the expected format before rendering

#### Learning Outcomes:
- **Async/Await Pattern**: Deepened understanding of asynchronous JavaScript and error handling
- **Fetch API**: Learned proper usage of fetch() with error handling for different HTTP status codes
- **API Integration**: Gained experience integrating third-party APIs (GitHub REST API)
- **Error State Management**: Learned to create user-friendly error states that don't break the UI
- **Date Manipulation**: Improved skills in JavaScript Date object manipulation and formatting

---

### Use Case 2: Performance Optimization

**My Goal**: I wanted to optimize my portfolio's loading performance. I knew about lazy loading and script deferring but needed confirmation on best practices and other optimization opportunities.

#### My Request to AI:
```
I am trying to optimize my web application to ensure that it is running smoother, 
what optimizations are generally applied to web apps using HTML, CSS and JS?
```

#### AI Suggestions Received:
AI suggested several optimization opportunities:
- Adding `defer` attribute to script tag (which I evaluated and implemented)
- Adding `loading="lazy"` to image tags (which I applied)
- DOM query caching patterns (which I reviewed and implemented where appropriate)
- Consolidation opportunities for event listeners (which I carefully refactored)

**Example Suggestions from AI:**
```html
<!-- Before -->
<script src="js/script.js"></script>
<img src="assets/placeholder-image.png" alt="Project">

<!-- After -->
<script src="js/script.js" defer></script>
<img src="assets/placeholder-image.png" alt="Project" loading="lazy">
```

```javascript
// AI suggested consolidating multiple DOMContentLoaded listeners
// and caching frequently accessed DOM elements
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    // Cache these for reuse instead of re-querying
});
```

#### My Implementation Decisions:

I evaluated AI suggestions and made these implementation choices:

1. **Consolidated Navigation Handlers**: I refactored my code to combine mobile navigation toggle and smooth scrolling into a single DOMContentLoaded listener to reduce duplicate queries:
   ```javascript
   // Before: Two separate DOMContentLoaded listeners querying navLinks separately
   // After: One consolidated listener caching navLinks and handling both features
   ```

2. **Defensive Programming**: I added null checks before DOM manipulation to prevent errors:
   ```javascript
   if (hamburger && navMenu) {
       // Safe to use elements
   }
   ```

3. **Image Lazy Loading Implementation**: I applied lazy loading to all images after verifying it wouldn't affect initial page load

4. **Script Loading Strategy**: I added defer attribute after confirming it wouldn't break my existing functionality

5. **Code Review**: I reviewed AI's consolidation suggestions carefully to ensure they didn't introduce bugs, and refactored safely

#### Learning Outcomes:
- **Performance Best Practices**: Learned about script deferring and image lazy loading
- **DOM Query Optimization**: Understood the importance of caching DOM queries to reduce redundant operations
- **Code Consolidation**: Gained insight into reducing event listener overhead
- **Browser Rendering**: Better understanding of how browser rendering and script execution interact
- **Resource Loading**: Learned about critical rendering path and non-blocking resource loading



## Benefits & Challenges Analysis

### Benefits I Achieved Using AI Assistance

1. **Learning Acceleration**: AI helped me understand complex concepts faster, allowing me to implement features more quickly
   - Explained async/await patterns so I could write my own implementation
   - Clarified fetch API error handling approaches
   - Provided examples of performance optimization techniques

2. **Problem-Solving Assistance**: When I got stuck, AI provided suggestions that helped me think through solutions
   - Suggested error handling patterns which I then customized
   - Offered optimization ideas which I evaluated and implemented selectively
   - Provided code structure examples which I adapted to my needs

3. **Code Review Insights**: AI suggestions helped me consider best practices
   - Reminded me about script deferring and lazy loading
   - Suggested DOM query caching patterns
   - Highlighted areas where I could consolidate code

4. **Time Efficiency**: Using AI as a learning tool reduced my research time
   - Instead of searching documentation for hours, AI provided quick explanations
   - Got pattern examples quickly, then I customized them for my project
   - Received debugging help faster than traditional debugging methods

5. **Design Consistency**: AI suggestions sometimes reminded me to maintain consistency
   - Suggested reusing existing CSS patterns (which I verified and did)
   - Reminded me about theme variable usage (which I then implemented)

### Challenges I Encountered Using AI Assistance

1. **Over-Engineering from AI**: AI sometimes suggested more complex solutions than needed
   - **My Solution**: I simplified AI's error handling to focus on essential cases (network, rate limit, empty response)
   - **What I Learned**: The importance of evaluating AI suggestions against project scope and requirements

2. **Theme System Inconsistencies**: AI suggestions often used hardcoded values instead of my theme system
   - **My Solution**: I manually rewrote CSS to use my theme variables (--text-primary, --surface-color, etc.)
   - **What I Learned**: Always verify AI suggestions against my existing codebase patterns and systems

3. **Event Handler Complexity**: AI's consolidation suggestions initially created potential conflicts
   - **My Solution**: I carefully refactored to safely handle both mobile menu closing and smooth scrolling
   - **What I Learned**: Need to thoroughly test AI suggestions before implementation, especially when consolidating functionality

4. **Assumption of API Structure**: AI's examples assumed perfect API responses
   - **My Solution**: I added comprehensive null checks and fallback values (e.g., description || 'No description provided')
   - **What I Learned**: Always add defensive programming and validate external data, even when AI examples don't show it

5. **Customization Overhead**: AI suggestions needed significant customization to match my design
   - **My Solution**: I treated AI code as starting points, then rewrote to match my requirements
   - **What I Learned**: AI is better for learning patterns than providing production-ready code for specific projects

---



**What I Learned:**
- Importance of specific error messages for different failure scenarios
- Need to validate API response structure before processing
- User-friendly error messages vs. technical error details
- Proper error logging for debugging while showing friendly messages to users

