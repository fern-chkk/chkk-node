/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const StringProperty: core.serialization.Schema<serializers.StringProperty.Raw, Chkk.StringProperty> =
    core.serialization.string();

export declare namespace StringProperty {
    type Raw = string;
}
