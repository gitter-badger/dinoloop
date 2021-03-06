import { RequestEndMiddleware } from '../../filter/filter';

// If user did not configure requestEnd middleware to send response
// then ResponseMiddleware is the last requestEnd middleware that gets fired,
// sends json response by default.
/**
 * Formats result as JSON response
 */
export class ResponseEndMiddleware extends RequestEndMiddleware {
    invoke(request, response, next, result): void {
        response.json(result);
    }
}
