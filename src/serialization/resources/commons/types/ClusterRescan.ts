/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const ClusterRescan: core.serialization.Schema<serializers.ClusterRescan.Raw, Chkk.ClusterRescan> =
    core.serialization.string();

export declare namespace ClusterRescan {
    type Raw = string;
}