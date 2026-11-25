// Old website addresses forward to vantusk.com, keeping the page and any query.
// Only the website hosts are matched: app., demo., ops. and api. are separate projects and never reach this code.
// 302 for now; switch to 301 once the forward has been checked for a week.
const OLD_HOSTS = new Set(["www.staffflowpro.com", "staffflowpro.com"]);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (OLD_HOSTS.has(url.hostname.toLowerCase())) {
    return Response.redirect("https://vantusk.com" + url.pathname + url.search, 302);
  }
  return context.next();
}
