const User = require("../entity/user-entity");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { myDataSource } = require("../../app-data-source.js");

// // register routes
// app.get("/users", async function (req: Request, res: Response) {
//   const users = await myDataSource.getRepository(User).find();
//   res.json(users);
// });

// app.get("/users/:id", async function (req: Request, res: Response) {
//   const results = await myDataSource.getRepository(User).findOneBy({
//     id: req.params.id,
//   });
//   return res.send(results);
// });

// app.post("/users", async function (req: Request, res: Response) {
//   const user = await myDataSource.getRepository(User).create(req.body);
//   const results = await myDataSource.getRepository(User).save(user);
//   return res.send(results);
// });

exports.register = catchAsync(async (req, res, next) => {
  const { fullName, email, password } = req.body;
  const user = await myDataSource.getRepository(User).create({
    fullName,
    email,
    password,
  });
  const results = await myDataSource.getRepository(User).save(user);

  res.status(201).json({
    status: "success",
    data: {
      results,
    },
  });
});
