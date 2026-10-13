Lab 09: Response Time Comparison of CSR, SSR, and SSG

Student: Abdul Rehman
GitHub Username: abdulrehmandev-12
Student Email: 23FA-012-ST@students.uitu.edu.pk
Framework: Next.js
Language: JavaScript
Testing Tool: PowerShell HTTP timing measurements

1. Objective

The objective of this lab was to implement Client-Side Rendering (CSR), Server-Side Rendering (SSR), and Static Site Generation (SSG) in Next.js and compare their response times.

2. Response Time Measurements

Each route was requested five times from the local production server. The total HTTP request duration was measured in milliseconds, and the average was calculated.

Rendering Method	Test 1 (ms)	Test 2 (ms)	Test 3 (ms)	Test 4 (ms)	Test 5 (ms)	Average (ms)
CSR (/csr)	        8.69	    3.57	    3.17	    3.19	    3.39	    4.40
SSR (/ssr)	        433.17 	    942.75	    278.06	    270.86	    270.16	    439.00
SSG (/ssg)	        2.28	    2.19	    2.12	    2.26	    2.38	    2.25
3. Comparison of Average Response Times
Rank	Rendering Method	Average Response Time
1	SSG	2.25 ms
2	CSR	4.40 ms
3	SSR	439.00 ms
Results Visualization
Average HTTP response duration (ms)

SSG  | 2.25 ms
CSR  | 4.40 ms
SSR  | 439.00 ms


SSG had the lowest average response time in this experiment. CSR was also fast for the initial document request. SSR had a considerably higher average response time.

4. Analysis
Client-Side Rendering (CSR)

CSR recorded an average document response time of 4.40 ms. The browser receives the initial page and then requests the joke data from the external API. Therefore, the document response time does not include the complete time required for the joke to appear.

Server-Side Rendering (SSR)

SSR recorded an average response time of 439.00 ms. The individual measurements varied significantly, ranging from 270.16 ms to 942.75 ms. This may be due to server-side data fetching, API response delays, or other runtime factors.

Static Site Generation (SSG)

SSG recorded the lowest average response time at 2.25 ms. Because the page is generated during the production build, the server can deliver the generated page without fetching a new joke for each request.

5. Conclusion

Based on the five measurements collected, SSG performed best, with an average HTTP response duration of 2.25 ms. CSR followed at 4.40 ms, while SSR recorded the highest average at 439.00 ms.

These results demonstrate that pre-generating a page can reduce request-time work. SSR has additional work because it fetches data and renders the page for each request. CSR can return the initial document quickly, but its external API request adds time before the joke is displayed.

Limitation: These measurements represent total HTTP request durations obtained using PowerShell, not Chrome DevTools measurements or the time until the complete joke becomes visible. The results reflect this local testing environment and should not be generalized to all deployments.

6. Project Routes
CSR: http://localhost:3000/csr
SSR: http://localhost:3000/ssr
SSG: http://localhost:3000/ssg
7. Repository

AbdulRehmanLab09-AWE