/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Status of the Organization: active, inactive, deleted etc
 */
export type OrganizationStatus = "ACTIVE" | "INACTIVE" | "DEACTIVATED";

export const OrganizationStatus = {
    Active: "ACTIVE",
    Inactive: "INACTIVE",
    Deactivated: "DEACTIVATED",
} as const;
