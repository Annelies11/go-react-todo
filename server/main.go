package main

import (
	"14_todo/router"
	"fmt"
	"log"
	"net/http"
)

func main() {
	r := router.Router()
	fmt.Println("Starting Server on Port 9000")

	log.Fatal(http.ListenAndServe("9000", r))
}
