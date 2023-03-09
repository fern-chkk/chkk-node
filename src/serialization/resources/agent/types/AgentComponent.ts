/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { Chkk } from "@fern-api/chkk";
import * as core from "../../../../core";

export const AgentComponent: core.serialization.ObjectSchema<serializers.AgentComponent.Raw, Chkk.AgentComponent> =
    core.serialization.object({
        name: core.serialization.string(),
        image: core.serialization.string(),
        imageType: core.serialization.property("image_type", core.serialization.string().optional()),
        state: core.serialization.lazy(async () => (await import("../../..")).ResourceStatus),
        reason: core.serialization.string().optional(),
    });

export declare namespace AgentComponent {
    interface Raw {
        name: string;
        image: string;
        image_type?: string | null;
        state: serializers.ResourceStatus.Raw;
        reason?: string | null;
    }
}