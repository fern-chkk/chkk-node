/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * examples: when counting Availability Risk with group_by only on category, each item will be like: {category:defects, count:9}
 */
export interface SummaryEntry {
    count: number;
    category?: string;
}
