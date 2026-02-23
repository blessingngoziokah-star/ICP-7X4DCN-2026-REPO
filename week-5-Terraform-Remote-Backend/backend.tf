terraform {
  backend "s3" {
    bucket         = "week5-terraform-state-blessing"
    key            = "dev/terraform.tfstate"
    region         = "eu-central-1"
    dynamodb_table = "terraform-lock"
    encrypt        = true
  }
}