package se.kth.sda6.skeleton.posts;

// @TODO add Hibernate annotations to define which table and columns should be used to save the Post Object.
public class Post {
    private Long id;

    private String body;

//    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
//    private List<Comment> comments = new ArrayList<>();

    public Post() {
    }

    public Post(String body) {
        this.body = body;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

//    public void addComment(Comment comment) {
//        comments.add( comment );
//        comment.setPost( this );
//    }
//
//    public void removeComment(Comment comment) {
//        comments.remove( comment );
//        comment.setPost( null );
//    }
}
