import Pet from "../models/Pet.js";
import User from "../models/User.js";

/*READ*/
export const getPet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findById(id);
        res.status(200).json(pet);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
};

export const getPetMatches = async (req, res) {
    try {
        const { id } = req.params;
        const pet = await Pet.findById(id);

        const matches = await Promise.all(
            pet.matches.map((id) => Pet.findById(id))
        );

        const formattedMatches = friends.map(
            ({ _id, name, location, picturePath }) => {
                return { _id, firstName, location, picturePath };
            }
        );
        res.status(200).json(formattedMatches);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/* UPDATE matches*/
export const addRemoveMatch = async (req, res) => {
    try {
      const { id, matchId } = req.params;
      const pet = await Pet.findById(id);
      const user = await User.findById(matchId);
  
      if (pet.matches.includes(matchId)) {
        user.matches = user.matches.filter((id) => id !== matchId);
        pet.matches = pet.matches.filter((id) => id !== id);
      } else {
        user.matches.push(matchId);
        pet.matches.push(id);
      }
      await user.save();
      await pet.save();
  
      const matches = await Promise.all(
        pet.matches.map((id) => User.findById(id))
      );
      const formattedMatches = matches.map(
        ({ _id, name, location, picturePath }) => {
          return { _id, name, location, picturePath };
        }
      );
  
      res.status(200).json(formattedMatches);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};