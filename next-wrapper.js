const defaultHandlerWrapper = (app) => {
    const handler = app.getRequestHandler();

    return ({ raw, url }, hapiReply) =>
        handler(raw.req, raw.res, url)
        .then(() => {
            hapiReply.close(false);
        });
};

module.exports = { defaultHandlerWrapper };
