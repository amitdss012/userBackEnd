

export const logOut = async (req , res) => {
    return res.status(201).cookie("token", "" , {expiresIn: new Date(Date.now()) , httpOnly: true}).json({
        message: "loged out successfully",
        success: true,
    })
}
