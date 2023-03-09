/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

/**
 * ???
 */
export interface ClusterDetectedLar {
    signatureId: string;
    severity: string;
    availabilityImpact: string;
    title: string;
    url: string;
    needAttention: boolean;
    labels: Chkk.SignatureLabel[];
    remediations: Chkk.ClusterDetectedLarRemidiation[];
    triggerConditions: Chkk.ClusterDetectedLarTriggerConditions;
    mitigations: Chkk.ClusterDetectedLarMitigation[];
    resources: Chkk.ClusterDetectedLarAffectedResource[];
}
