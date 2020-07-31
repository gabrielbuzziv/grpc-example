import InhabitantService from '../services/inhabitants'

/**
 * InhabitantController
 */
class InhabitantController {
  /**
   * Return all inhabitants.
   * @param {*} request
   * @param {*} response
   */
  async index(request, response) {
    const { id } = request.params;

    const inhabitant = await InhabitantService.getInhabitantById({ id })

    return response.json(inhabitant)
  }
}

export default new InhabitantController();
