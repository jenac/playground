#!/usr/bin/env bash

# Admin API key goes here
KEY="5d005826e6b05c0001ca5331:298d6091359b890f949f0d6f02c44c1ecdd333e8d3e9ede528930f562d24e926"

# Split the key into ID and SECRET
TMPIFS=$IFS
IFS=':' read ID SECRET <<< "$KEY"
IFS=$TMPIFS

# Prepare header and payload
NOW=$(date +'%s')
FIVE_MINS=$(($NOW + 300))
HEADER="{\"alg\": \"HS256\",\"typ\": \"JWT\", \"kid\": \"$ID\"}"
PAYLOAD="{\"iat\":$NOW,\"exp\":$FIVE_MINS,\"aud\": \"/v2/admin/\"}"

# Helper function for perfoming base64 URL encoding
base64_url_encode() {
    declare input=${1:-$(</dev/stdin)}
    # Use `tr` to URL encode the output from base64.
    printf '%s' "${input}" | base64 | tr -d '=' | tr '+' '-' |  tr '/' '_'
}

# Prepare the token body
header_base64=$(base64_url_encode "$HEADER")
payload_base64=$(base64_url_encode "$PAYLOAD")

header_payload="${header_base64}.${payload_base64}"

# Create the signature
signature=$(printf '%s' "${header_payload}" | openssl dgst -binary -sha256 -mac HMAC -macopt hexkey:$SECRET | base64_url_encode)

# Concat payload and signature into a valid JWT token
TOKEN="${header_payload}.${signature}"
echo $TOKEN
# Make an authenticated request to create a post
curl -v -X POST -H "Authorization: Ghost $TOKEN" \
-H "Content-Type: application/json" \
-d '{"posts":[{"excerpt":null,"custom_excerpt":null,"featured":false,"feature_image":null,"canonical_url":null,"codeinjection_foot":"","codeinjection_head":"","custom_template":null,"og_image":null,"og_title":null,"og_description":null,"twitter_image":null,"twitter_title":null,"twitter_description":null,"html":null,"locale":null,"meta_description":null,"meta_title":null,"mobiledoc":null,"plaintext":null,"published_at":null,"slug":"hello-world","status":"draft","title":"Hello, World","authors":[{"id":"1","name":"Chatty Boy","slug":"chatty","email":"lihe.chen@gmail.com","profile_image":null,"cover_image":null,"bio":null,"website":null,"location":null,"accessibility":null,"status":"active","locale":null,"meta_title":null,"meta_description":null,"last_seen":"2019-06-12T01:46:16.000Z","created_at":"2019-06-12T00:53:17.000Z","updated_at":"2019-06-12T01:46:16.000Z","facebook":null,"twitter":null,"tour":null,"roles":[{"id":"5d004cfce6b05c0001ca51db","name":"Owner","description":"Blog Owner","created_at":"2019-06-12T00:53:16.000Z","updated_at":"2019-06-12T00:53:16.000Z"}]}],"published_by":null,"tags":[]}]}' \
"http://localhost:2368/ghost/api/v2/admin/posts/"