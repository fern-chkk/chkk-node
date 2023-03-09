/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

/**
 * ???
 */
export interface CreateTicketRequestBody {
    summary: string;
    description: string;
    assigneeName: string;
    assigneeEmail: string;
    reporterName: string;
    reporterEmail: string;
    issueType: string;
    priority: string;
    larId: string;
    clusterId: string;
    clusterName: string;
    clusterType: string;
    clusterVersion: string;
    larDetails: string;
    larCategory: string;
    affectedResources: Chkk.CreateTicketRequestAffectedResource[];
}
