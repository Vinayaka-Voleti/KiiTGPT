export const signin = (req, res)=>{
  res.send("Signin");
}
export const login = (req, res)=>{
  res.send("Login");
}

export const details = (req, res)=>{
  const {name, email} = req.body
  res.json({
    message: `This is ${name} and email is ${email}`
  })
}

export const id = (req, res) => {
  const userid = req.params.id 
  const {name, email} = req.body 
  res.json({
    message : `${userid}: ${name} & ${email}`
  })
}
