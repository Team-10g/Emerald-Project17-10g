'use strict'

const { sanitizeEntity } = require("strapi-utils/lib")

module.exports = {

    async me(ctx) {

        // get the mentor that is currently logged in
        const { user } = ctx.state
        const mentor = await strapi.services.mentor.findOne({ user: user.id })

        // remove private fields and return the mentor
        return sanitizeEntity(mentor, { model: strapi.models.mentor })
    },

    /**
     * Create a new mentor
     * 
     * @param {String} first_name
     * @param {String} last_name
     *
     * @return {Mentor} 
     */
    async create(ctx) {

        // ensure the request is in the right format
        if (ctx.is('multipart')) return ctx.badRequest(
            'Multipart requests are not accepted!',
            { id: 'Mentor.create.format.invalid', error: 'ValidationError' }
        )

        // get the user that is currently logged in
        // to set as the new mentor's user
        const { user } = ctx.state
        ctx.request.body.user = user.id
        
        // remove private fields and return the new mentor
        const mentor = await strapi.services.mentor.create(ctx.request.body)
        return sanitizeEntity(mentor, { model: strapi.models.mentor })
    },

    async addtoinbox(ctx){
        const { id } = ctx.params;
        console.log("WE updating");
        const {
            add,
          } = ctx.request.body;

        if (ctx.is('multipart'))
        return ctx.badRequest('Multipart requests are not accepted!', {
          id: 'activity.update.format.invalid',
          error: 'ValidationError',
        });

        if (!add)
          return ctx.badRequest('A description, Standards must be provided!', {
            id: 'activity.update.body.invalid',
            error: 'ValidationError',
          });

        // Retrieve the existing mentor data
        const existingMentor = await strapi.services.mentor.findOne({ id });

        // Combine the existing inbox with the new inbox items
        const updatedInbox = [...existingMentor.inbox, add];

        const updatedMentor = await strapi.services.mentor.update(
            { id },
            {inbox: updatedInbox}
        );

        return sanitizeEntity(updatedMentor, { model: strapi.models.mentor });
    },
    async remove(ctx){
        const { id } = ctx.params;
        console.log("Removing from inbox:");
      
        const { itemToRemove } = ctx.request.body;
      
        if (ctx.is('multipart'))
          return ctx.badRequest('Multipart requests are not accepted!', {
            id: 'activity.remove.format.invalid',
            error: 'ValidationError',
          });
      
        if (!itemToRemove)
          return ctx.badRequest('Item to remove must be provided!', {
            id: 'activity.remove.body.invalid',
            error: 'ValidationError',
          });

        let newId;
        if(id == 9){
          newId=6;
        }
        else{
          newId=id;
        }

        const existingMentor = await strapi.services.mentor.findOne({ id:newId });

      
        // Retrieve the existing mentor data

        console.log(itemToRemove)
      
        // Remove the specified item.id from the inbox
        const updatedInbox = existingMentor.inbox.filter(item => item.id !== itemToRemove.id);

        console.log("Current inbox:")
        console.log(updatedInbox);
      
        // Update the mentor with the modified inbox
        const updatedMentor = await strapi.services.mentor.update(
          { id:newId },
          { inbox: updatedInbox }
        );
      
        return sanitizeEntity(updatedMentor, { model: strapi.models.mentor });
    },
}