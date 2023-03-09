/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const SubmitFeedbackResponse: core.serialization.ObjectSchema<
    serializers.SubmitFeedbackResponse.Raw,
    Chkk.SubmitFeedbackResponse
> = core.serialization.object({
    message: core.serialization.string(),
});

export declare namespace SubmitFeedbackResponse {
    interface Raw {
        message: string;
    }
}