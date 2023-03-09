/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const SummaryEntry: core.serialization.ObjectSchema<serializers.SummaryEntry.Raw, Chkk.SummaryEntry> =
    core.serialization.object({
        count: core.serialization.number(),
        category: core.serialization.string().optional(),
    });

export declare namespace SummaryEntry {
    interface Raw {
        count: number;
        category?: string | null;
    }
}
