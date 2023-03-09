/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { Chkk } from "@fern-api/chkk";

/**
 * ???
 */
export interface UpdateClusterRequestBody {
    name?: string;
    region?: string;
    /** whether this cluster should be considered to be part of production or not */
    production?: boolean;
    version?: string;
    nodeCount?: number;
    managedNgCount?: number;
    selfManagedNgCount?: number;
    containerRuntimes?: string[];
    labels?: Record<string, Chkk.InlineTypeString | undefined>;
    cloudProvider?: Chkk.KubernetesProvider;
    chkkMetadata?: Chkk.ChkkAgent;
}
