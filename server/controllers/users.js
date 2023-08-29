import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      res.status(200).json(user);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};

/*Read user matches with pets*/
export const getUserMatches = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
  
      const matches = await Promise.all(
        user.matches.map((id) => User.findById(id))
      );
      const formattedMatches = matches.map(
        ({ _id, name, location, picturePath }) => {
          return { _id, firstName, location, picturePath };
        }
      );
      res.status(200).json(formattedMatches);
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
};

/* UPDATE matches*/
export const addRemoveMatch = async (req, res) => {
    try {
      const { id, matchId } = req.params;
      const user = await User.findById(id);
      const match = await User.findById(matchId);
  
      if (user.matches.includes(matchId)) {
        user.matches = user.matches.filter((id) => id !== matchId);
        match.matches = match.matches.filter((id) => id !== id);
      } else {
        user.matches.push(matchId);
        match.matches.push(id);
      }
      await user.save();
      await match.save();
  
      const matches = await Promise.all(
        user.matches.map((id) => User.findById(id))
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