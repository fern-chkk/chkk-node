/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const InlineTypeString: core.serialization.Schema<serializers.InlineTypeString.Raw, Chkk.InlineTypeString> =
    core.serialization.string();

export declare namespace InlineTypeString {
    type Raw = string;
}
