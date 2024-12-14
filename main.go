package main

import (
	"itish2003/image-primitive/router"
)

const (
	port string = "8080"
)

func main() {
	r := router.Router()
	r.Run(":" + port)
}
