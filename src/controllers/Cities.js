import City from '../models/City.js'

const Cities = {
  getAll: async (req, res) => {
    try {
      const cities = await City.find();
      res.send(cities);
    } catch (error) {
      res.status(500).send({ error: "Error fetching cities from database" });
    }
  },
  getOne: async (req, res) => {
    const id = req.params.id;
    try {
      const city = await City.findById(id);
      if (!city) {
        return res.status(404).send({ error: "City not found" });
      }
      res.send(city);
    } catch (error) {
      res.status(500).send({ error: "Error fetching city from database" });
    }
  }
}

export default Cities;