//package se.kth.sda6.skeleton.comments;
//
//
//import se.kth.sda6.skeleton.posts.Post;
//
//import javax.persistence.*;
//
///**
// * Represents a comment made by a user on a post.
// */
//@Entity
//public class Comment {
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Long id;
//
//    private String body;
//
//    @ManyToOne
//    private Post post;
//
//    public Comment() {
//    }
//
//    public Comment(String body, Post post) {
//        this.body = body;
//        this.post = post;
//    }
//
//    public String getBody() {
//        return body;
//    }
//
//    public void setBody(String body) {
//        this.body = body;
//    }
//
//    public Post getPost() {
//        return post;
//    }
//
//    public void setPost(Post post) {
//        this.post = post;
//    }
//}
