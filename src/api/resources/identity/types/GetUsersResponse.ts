/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Response to requesting details for the logged in identity
 */
export interface GetUsersResponse {
    /** The ID of the Chkk Account of the current identity */
    accountId?: string;
    /** The email address of the user of the current identity */
    email: string;
    /** the name of the user of the current identity */
    name: string;
}
