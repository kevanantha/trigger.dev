import { z } from "zod";
import * as issues from "./issues";
import * as issuesComments from "./issueComments";
import * as pullRequest from "./pullRequests";
import * as pullRequestComments from "./pullRequestComments";
import * as pullRequestReviews from "./pullRequestReviews";
import * as push from "./pushes";

export const WebhookRepoSourceSchema = z.object({
  subresource: z.literal("repository"),
  scopes: z.array(z.string()),
  repo: z.string(),
  events: z.array(z.string()),
});

export const WebhookOrganizationSourceSchema = z.object({
  subresource: z.literal("organization"),
  scopes: z.array(z.string()),
  org: z.string(),
  events: z.array(z.string()),
});

export const WebhookSourceSchema = z.union([
  WebhookRepoSourceSchema,
  WebhookOrganizationSourceSchema,
]);

export {
  issues,
  issuesComments,
  pullRequest,
  pullRequestComments,
  pullRequestReviews,
  push,
};
